const fs = require('fs').promises;
const path = require('path');
const DATA_TALKER = require('../talker.json');

async function updateTalkerPut(id, updateTalkerData) {
    const oldTalker = await DATA_TALKER;
    const updateTalker = { id, ...updateTalkerData };
    const updateTalkers = oldTalker.reduce((talkerList, currentTalker) => {
        if (currentTalker.id === updateTalker.id) return [...talkerList, updateTalker];
        return [...talkerList, currentTalker];
    }, []);

    const updateData = JSON.stringify(updateTalkers);
    try {
        await fs.writeFile(path.resolve(__dirname, DATA_TALKER), updateData);
        return updateTalker;
    } catch (error) {
        console.log(`Error ${error}`);
    } 
}

module.exports = {
    updateTalkerPut,
};