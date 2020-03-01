
/** @type {Collection} */
export let highScoreCollection;

/**
 * Mongo collections
 * @param {Db} db - Connected mongo database
 */
export const initCollections = (db) => {
    highScoreCollection = db.collection('highscore');
};
