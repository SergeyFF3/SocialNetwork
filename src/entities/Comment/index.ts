import CommentList from "./UI/CommentList/CommentList";
import CommentItem from "./UI/CommentItem/CommentItem";

export { CommentItem, CommentList }

export {
    getCommentData,
    getCommentError,
    getCommentIsLoading
} from './model/selectors/getCommentData'

export type {Comment, CommentSchema} from './model/types/comment'

export { fetchComments } from './model/services/fetchComments'