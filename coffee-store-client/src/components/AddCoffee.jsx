import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, taste, supplier, quantity, category, details, photo };
        console.log(newCoffee);

        // send new coffee making information to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="p-24 bg-[#F4F3F0]">
            <h2 className="text-3xl font-extrabold text-center">Add Coffee</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* form name and quantity row */}
                <div className="md:flex gap-5">
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form  supplier and taste row */}
                <div className="md:flex gap-5">
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-5">
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="">
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <input type="submit" className="bg-[#D2B48C] btn btn-block hover:bg-black hover:border-[#D2B48C] hover:text-white border-4 font-bold border-black" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;