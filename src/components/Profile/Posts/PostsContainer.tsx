import { connect } from 'react-redux';
import { addPostAC, changeNewPostTextAC } from '../../Redux/profileReducer';
import { Posts } from './Posts';

import { StoreType } from '../../Redux/redux-store';




const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.postsPage
    }
}

const mapDispatchToProps = (dispatch: (action: { type: string, newText: string }) => void) => {

    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewPostTextAC(text))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
