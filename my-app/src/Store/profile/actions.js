export const Change_NAME = 'PROFILE::Change_NAME';
export const ChangeShowNAME = {
    type: Change_NAME,
};
export const changeName = (newName) => ({
    type: Change_NAME,
    payload: newName,
});