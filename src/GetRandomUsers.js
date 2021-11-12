import React from 'react'
import './style.css';

class GetRandomUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
        };
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        {
            console.log("Id: ", id)
            console.log("Before Deleting: ", this.state.data)
            console.log(this.state.data[0])
            this.state.data.splice(id,1);
            console.log("Now Array: ", this.state.data)
            this.setState(
                {
                    data: this.state.data,
                }
            )
            console.log("After Deleting: ", this.state.data)
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5')
            .then(resp => resp.json(),)
            .then(resp => {
                this.setState({
                    data: resp.results,
                    loading: true,
                })
            })
    }

    render() {

        let { data, loading } = this.state

        if (!loading) {
            return (
                <div>Loading...</div>
            )
        }

        else {
            return (
                <div class="container center">
                    <div class="row">
                        <div class="people-nearby">
                            {
                                data.map((itm, ind) => {
                                    return <div class="nearby-user">
                                        <div class="row">
                                            <div class="col-md-2 col-sm-2">
                                                <img src={itm.picture.medium} alt="user" class="profile-photo" />
                                            </div>
                                            <div class="col-md-7 col-sm-5">
                                                <h5><a href="#" class="profile-link">{itm.name.title + " " + itm.name.first + " " + itm.name.last}</a></h5>
                                                <p>{itm.email}</p>
                                            </div>
                                            <div class="col-md-3 col-sm-2">
                                                <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={() => this.deleteUser(ind)}>&#xE872;</i></a>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>)
            {/* // return (
            //     <div class="container">
            //         <table class="table table-bordered center">
            //             <thead>
            //                 <tr>
            //                     <th scope="col">#</th>
            //                     <th scope="col">Picture</th>
            //                     <th scope="col">Name</th>
            //                     <th scope="col">Action</th>
            //                 </tr>
            //             </thead>
            //             <tbody>

            //                 {
            //                     data.map(function take(itm, ind) { */}
            {/* //                         return <>
            //                             <tr>
            //                                 <th scope="row">{ind + 1}</th>
            //                                 <td><img src={itm.picture.medium} /></td>
            //                                 <td>{itm.name.title + " " + itm.name.first + " " + itm.name.last}</td>
            //                                 <td><button class="buttun btn-danger">x</button></td>
            //                             </tr>
            //                         </>
            //                     })
            //                 }
            //             </tbody>
            //         </table>

            //         <div class="card">
            //             <ul class="list-group list-group-flush">
            //                 {
            //                     data.map((itm, ind) => {
            //                         return <>
            //                             <li class="list-group-item">
            //                                 <img src={itm.picture.medium} />
            //                                 {itm.name.title + " " + itm.name.first + " " + itm.name.last}
            //                                 <button class="buttun btn-danger">x</button>
            //                             </li>
            //                         </>
            //                     })
            //                 }
            //                 <li class="list-group-item">Dapibus ac facilisis in</li>
            //                 <li class="list-group-item">Vestibulum at eros</li>
            //             </ul>
            //         </div>

            //         {console.log(data[1])}
            //     </div>
            // ) */}
        }
    }
}

export default GetRandomUsers;