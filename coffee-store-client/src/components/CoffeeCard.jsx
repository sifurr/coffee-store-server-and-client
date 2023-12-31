
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffeeList, setCoffeeList }) => {
    const { _id, name, taste, supplier, quantity, photo } = coffee || {}
   

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

                fetch(`https://coffee-store-server-pr16d2blt-saifurs-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            // eslint-disable-next-line react/prop-types
                            const remainingCoffeeItems = coffeeList.filter(aCoffee => aCoffee._id !== _id);
                            setCoffeeList(remainingCoffeeItems);
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