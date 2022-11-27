import { UPDATE_TAGS, UPDATE_TITLE, UPDATE_HEADING, UPDATE_DESCRIPTION, UPDATE_PUBLISHER_NAME, UPDATE_READING_TIME } from "./action";
import uuid from 'react-uuid';
export type blogType = {
    blogId: string;
    id: string;
    title: string;
    description: string;
    tags: string[];
    readingTime: number;
    heading: string;
    publisherName: string;
}

export const initialState: blogType = {
    blogId: uuid(),
    id: '',
    title: '',
    description: '',
    tags: [],
    readingTime: 0,
    heading: '',
    publisherName: "",
}

const BlogReducer = (state: blogType = initialState, action: any) => {
    switch(action.type){
        case UPDATE_TITLE: {
            const {id, title, publisherName} = action.payload
            return {
                ...state,
                publisherName: publisherName,
                title: title,
                id: id
            }
        }
        case UPDATE_TAGS: {
            return {
                ...state,
                tags: action.payload
            }
        }
        case UPDATE_HEADING: {
            return {
                ...state,
                heading: action.payload
            }
        }
        case UPDATE_DESCRIPTION: {
            return {
                ...state,
                description: action.payload
            }
        }
        case UPDATE_PUBLISHER_NAME: {
            return {
                ...state,
                publisherName: action.payload
            }
        }
        case UPDATE_READING_TIME: {
            return {
                ...state,
                readingTime: action.payload
            }
        }
    }
}

export default BlogReducer;