import React from "react";


type ProfileStatusType = {
 status: string
}
class ProfileStatus extends React.Component<ProfileStatusType>  {
  state = {
    editMode: false,
    title: 'yo'
  }
  activatedEditMode(){
    this.setState({
      editMode: true
    })
  }
  deactivatedEditMode(){
    this.setState({
      editMode: false
    })
  }



  render () {
    return (
      <div>
        {!this.state.editMode &&
        <div>
            <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
            <input autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status}/>
        </div>
        }
    </div>
    )
  }
}

export default ProfileStatus;