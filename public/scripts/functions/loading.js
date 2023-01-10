export const load = () => {
    return JSON.parse(localStorage.getItem('todos'));
};
