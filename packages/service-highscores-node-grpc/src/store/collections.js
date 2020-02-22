
export let highscoreCollection;

/**
 * Mongo collections
 * @param {Db} db - Connected mongo database
 */
export const initCollections = (db) => {
    highscoreCollection = db.collection('highscore');
};
