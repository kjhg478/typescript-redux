import { createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

// 요청에 성공했을 때, 실패했을 때, 에러처리

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();
/*
export const getUserProfile = createStandardAction(GET_USER_PROFILE);
export const getUserProfileSuccess = createStandardAction(
    GET_USER_PROFILE_SUCCESS
)<GithubProfile>();
export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();
*/

