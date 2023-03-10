import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentByCampsiteId } from "./commentsSlice";
import CommentForm from "./CommentForm";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const CommentsList = ({campsiteId}) =>{
    const comments = useSelector(selectCommentByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector ((state) => state.comments.errMsg);

    return isLoading ? (<Loading />
        ) : errMsg ? (
            <Error errMsg={errMsg} />
        ) : (comments.featuredItem && (comments.featuredItem.length > 0)) ? 
        (
            <Col md='5' className ='m-1'>
                <h4>Comments</h4>
                {comments.featuredItem.map((comment)=>{
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId}>
                    {campsiteId}
                </CommentForm>
            </Col>
        ) : (
            <Col md='5' className='m-1'>
                There are no comments for this campsite yet.
            </Col>
        )

};

export default CommentsList;