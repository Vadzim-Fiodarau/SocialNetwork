import React, {ChangeEvent} from "react";
import {updateStatus} from "../../../../redux/profile-reducer";


type ProfileStatusType = {
  status: string
  updateStatus: typeof updateStatus
}

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status
  }
  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

   onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
   this.setState({
     status: e.currentTarget.value
   })
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div>
            <span
                onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
            <input autoFocus={true} onBlur={this.deactivatedEditMode}
                   value={this.state.status} onChange={this.onStatusChange}/>
        </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;