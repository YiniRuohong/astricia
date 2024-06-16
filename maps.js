document.addEventListener('DOMContentLoaded', function() {
    const mapImage = document.getElementById('mapImage');
    let isDragging = false;
    let startX, startY, initialX, initialY;

    // 获取图片容器的尺寸
    const container = mapImage.parentElement;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // 拖动事件
    mapImage.addEventListener('mousedown', function(e) {
        e.preventDefault(); // 防止拖动时弹出新标签页
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = mapImage.style.transform.match(/translate\(([^px]+)px, ([^px]+)px\)/);
        initialX = initialX ? parseFloat(initialX[1]) : 0;
        initialY = mapImage.style.transform.match(/translate\(([^px]+)px, ([^px]+)px\)/);
        initialY = initialY ? parseFloat(initialY[2]) : 0;
        mapImage.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            e.preventDefault(); // 防止拖动时弹出新标签页
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            let x = initialX + deltaX;
            let y = initialY + deltaY;

            // 边缘约束
            const rect = mapImage.getBoundingClientRect();
            const minX = containerWidth - rect.width;
            const minY = containerHeight - rect.height;
            x = Math.min(Math.max(x, minX), 0);
            y = Math.min(Math.max(y, minY), 0);

            mapImage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        mapImage.style.cursor = 'grab';
    });

    // 缩放事件
    let scale = 1;

    mapImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale *= delta;

        // 获取当前 transform 属性中的 translate 值
        const transform = mapImage.style.transform;
        const translateMatch = transform.match(/translate\(([^px]+)px, ([^px]+)px\)/);
        const currentX = translateMatch ? parseFloat(translateMatch[1]) : 0;
        const currentY = translateMatch ? parseFloat(translateMatch[2]) : 0;

        // 重新应用缩放和位移
        mapImage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
    });

    // 触摸事件
    let initialDistance = null;

    mapImage.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        } else if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            initialX = mapImage.style.transform.match(/translate\(([^px]+)px, ([^px]+)px\)/);
            initialX = initialX ? parseFloat(initialX[1]) : 0;
            initialY = mapImage.style.transform.match(/translate\(([^px]+)px, ([^px]+)px\)/);
            initialY = initialY ? parseFloat(initialY[2]) : 0;
        }
    });

    mapImage.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2) {
            const currentDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );

            if (initialDistance) {
                const delta = currentDistance / initialDistance;
                scale *= delta;
                initialDistance = currentDistance;

                // 获取当前 transform 属性中的 translate 值
                const transform = mapImage.style.transform;
                const translateMatch = transform.match(/translate\(([^px]+)px, ([^px]+)px\)/);
                const currentX = translateMatch ? parseFloat(translateMatch[1]) : 0;
                const currentY = translateMatch ? parseFloat(translateMatch[2]) : 0;

                // 重新应用缩放和位移
                mapImage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
            }
        } else if (e.touches.length === 1 && isDragging) {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            let x = initialX + deltaX;
            let y = initialY + deltaY;

            // 边缘约束
            const rect = mapImage.getBoundingClientRect();
            const minX = containerWidth - rect.width;
            const minY = containerHeight - rect.height;
            x = Math.min(Math.max(x, minX), 0);
            y = Math.min(Math.max(y, minY), 0);

            mapImage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        }
    });

    mapImage.addEventListener('touchend', function(e) {
        if (e.touches.length < 2) {
            initialDistance = null;
        }
        isDragging = false;
    });
});
