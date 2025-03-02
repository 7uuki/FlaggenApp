import {Colors} from "@/constants/Colors";

export function useThemeColor(
    colorName: keyof typeof Colors.light, // Assuming all themes have the same color keys
) {
    // Get the current theme (e.g., 'light', 'dark', 'blue', 'high-contrast')
    const theme = 'light';

    return Colors[theme][colorName];
}

