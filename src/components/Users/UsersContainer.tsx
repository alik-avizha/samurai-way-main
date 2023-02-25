import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    opPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       opPageChanged={this.opPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*
let mapDispatchToProps = (dispatch: any) => {
   return {
       follow: (userId: any) => {
           dispatch(followAC(userId));
       },
       unfollow: (userId: any) => {
           dispatch(unfollowAC(userId));
       },
       setUsers: (users: any) => {
           dispatch(setUsersAC(users));
       },
       setCurrentPage: (pageNumber: number) => {
           dispatch(setCurrentPageAC(pageNumber));
       },
       setTotalUserCount: (totalCount: number) => {
           dispatch(setUsersTotalCountAC(totalCount));
       },
       toggleIsFetching: (isFetching: boolean) => {
           dispatch(toggleIsFetchingAC(isFetching));
       }
   }
}
*/

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage,
        toggleFollowingProgress,getUsers})(UsersContainer);