
const AddCoffee = () => {
    return (
        <div>
            <h2 className="text-2xl text-center">Add Coffee</h2>
            <div className="flex gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="coffee name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="available quantity" className="input input-bordered" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;