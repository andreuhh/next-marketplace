import { RefObject } from "react";

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
    const getDropdownPosition = () => {
        if (!ref.current) return { top: 0, left: 0 };

        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240;

        // Initial position
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        // Check if dropdown would go outside the right edge of the viewport
        if (left + dropdownWidth > window.innerWidth) {
            // Align to the right edge
            left = rect.right + window.scrollX - dropdownWidth;

            // if off screen, align to the right edge of the viewport with some padding
            if (left < 0) {
                left = window.innerWidth - dropdownWidth - 16;
            }
        }

        if (left < 0) {
            left = 16;
        }

        return { top, left }
    };

    return { getDropdownPosition }
}