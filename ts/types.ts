/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type HMethod = "get" | "post" | "put" | "delete";
export type HEndpointBody<P = any, R = any> = { param: P; return: R; };
export type HEndpointType<T extends HServerRequests<T>, E extends keyof T, M extends keyof T[E]> = T[E][M];
export type HEndpointItemBase<B extends HEndpointBody, K extends keyof HEndpointBody> = B[K];
export type HEndpointParam<T extends HServerRequests<T>, E extends keyof T, M extends keyof T[E]> = HEndpointItemBase<HEndpointType<T, E, M>, "param">;
export type HEndpointReturn<T extends HServerRequests<T>, E extends keyof T, M extends keyof T[E]> = HEndpointItemBase<HEndpointType<T, E, M>, "return">;
export type HServerRequests<T extends HServerRequests<T>> = {
	[key in keyof T]: {
		[key in HMethod]?: HEndpointBody;
	}
};
