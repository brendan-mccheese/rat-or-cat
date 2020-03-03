import {DateTime} from "luxon";

export class Highscore {
    _username = null;
    _score = null;
    _timestamp = null;
    errors = [];

    get score() {
        return this._score;
    }

    get username() {
        return this._username;
    }

    get timestamp() {
        return this._timestamp;
    }

    /**
     *
     * @param {string} username
     * @param {number} score
     * @param {Date} timestamp
     */
    constructor(username, score, timestamp) {
        this.setUsername(username);
        this.setScore(score);
        this.setTimestamp(timestamp);
    }

    setScore(score) {
        if (score < 0) {
            this.errors.push("score cannot be less than zero");
            return;
        }
        this._score = score;
    }

    setUsername(username) {
        if (!username) {
            this.errors.push("username is required");
        }
        this._username = username;
    }

    setTimestamp(timestamp) {
        if (!timestamp || timestamp === new Date(null)) {
            this.errors.push("timestamp is required");
            return;
        }
        if (timestamp < DateTime.local().startOf("day").toJSDate()) {
           this.errors.push("timestamp is too far in the past");
           return;
        }
        this._timestamp = timestamp;
    }
}
