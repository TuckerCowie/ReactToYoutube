import {createSelector} from 'reselect';

export const getVideos = (state) => state.videos.data;
export const getSelectedIndex = (state) => state.videos.selectedIndex;

export const getSelectedVideo = createSelector(
    [getVideos, getSelectedIndex],
    (videos, id) => videos[id]
);