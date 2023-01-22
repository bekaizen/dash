const colors = require("tailwindcss/colors");
import helper from "./helper";

const el = getComputedStyle(document.body);
export default {
    ...helper.toRGB(colors),
    primary: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-primary")} / ${opacity})`,
    secondary: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-secondary")} / ${opacity})`,
    success: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-success")} / ${opacity})`,
    info: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-info")} / ${opacity})`,
    warning: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-warning")} / ${opacity})`,
    pending: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-pending")} / ${opacity})`,
    danger: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-danger")} / ${opacity})`,
    light: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-light")} / ${opacity})`,
    dark: (opacity = 1) =>
        `rgb(${el.getPropertyValue("--color-dark")} / ${opacity})`,
    slate: {
        50: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-50")} / ${opacity})`,
        100: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-100")} / ${opacity})`,
        200: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-200")} / ${opacity})`,
        300: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-300")} / ${opacity})`,
        400: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-400")} / ${opacity})`,
        500: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-500")} / ${opacity})`,
        600: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-600")} / ${opacity})`,
        700: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-700")} / ${opacity})`,
        800: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-800")} / ${opacity})`,
        900: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-sky-900")} / ${opacity})`,
    },
    darkmode: {
        50: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-50")} / ${opacity})`,
        100: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-100")} / ${opacity})`,
        200: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-200")} / ${opacity})`,
        300: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-300")} / ${opacity})`,
        400: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-400")} / ${opacity})`,
        500: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-500")} / ${opacity})`,
        600: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-600")} / ${opacity})`,
        700: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-700")} / ${opacity})`,
        800: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-800")} / ${opacity})`,
        900: (opacity = 1) =>
            `rgb(${el.getPropertyValue("--color-darkmode-900")} / ${opacity})`,
    },
};
