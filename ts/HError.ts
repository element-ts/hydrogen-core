/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {HErrorStatus} from "./HErrorStatus";

export class HError {

	private readonly _status: HErrorStatus;
	private readonly _msg: string;

	public constructor(status: HErrorStatus, msg: string) {

		this._status = status;
		this._msg = msg;

	}

	public status(): HErrorStatus { return this._status; }
	public msg(): string { return this._msg; }

}