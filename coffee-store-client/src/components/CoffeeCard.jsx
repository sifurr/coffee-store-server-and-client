
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee }) => {
    const { _id, name, taste, supplier, quantity, category, details, photo } = coffee || {}
   

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl h-44">
            <figure><img src={photo} className="h-full" alt="Movie" /></figure>
            <div className="flex justify-between w-full mx-4 mt-4">
                <div className="mb-2">
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <button className="btn btn-sm btn-secondary join-item">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-sm btn-primary join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-warning join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;