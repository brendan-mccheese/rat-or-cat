
export class Highscore {
    _username = "";
    _score = "";

    get score() {
        return this._score;
    }

    get username() {
        return this._username;
    }

    /**
     *
     * @param {string} username
     * @param {number} score
     */
    constructor(username, score) {
        this.setUsername(username);
        this.setScore(score);
    }

    setScore(score) {
        this._score = score;
    }

    setUsername(username) {
        this._username = username;
    };
}
