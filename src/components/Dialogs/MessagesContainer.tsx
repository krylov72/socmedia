
import { DialogsPagePropsType, StatePropsType } from '../Redux/store';
import { changeMessageTextAC, sendMessageAC } from '../Redux/dialogsReducer';
import { Messages } from './Messages';
import { connect } from 'react-redux';





const mapStateToProps = (state: StatePropsType) => {
    return {
        state: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: (action: { type: string, newText: string }) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        changeMessageText: (text: string) => {
            dispatch(changeMessageTextAC(text))
        },
    }
}


export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)