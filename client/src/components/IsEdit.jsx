/* eslint-disable react/prop-types */
const IsEdit = (
    {
        setIsEditing,
        editedProduct,
        setEditedProduct,
        handleSaveChanges,
    }
) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setEditedProduct((prev) => (
            { ...prev, [name]: value, }
        ));
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md w-3/4 h-[90vh] overflow-auto">
                <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="text-gray-700 block font-semibold mb-2"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <label
                        htmlFor="description"
                        className="text-gray-700 block font-semibold mb-2"
                    >
                        Description:
                    </label>
                    <textarea

                        id="description"
                        name="description"
                        value={editedProduct.description}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 h-32"
                    />
                    <label
                        htmlFor="category"
                        className="text-gray-700 block font-semibold mb-2"
                    >
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={editedProduct.category}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <label
                        htmlFor="subcategory"
                        className="text-gray-700 block font-semibold mb-2"
                    >
                        Sub Category:
                    </label>
                    <input
                        type="text"
                        id="subcategory"
                        name="subcategory"
                        value={editedProduct.subcategory}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <label
                        htmlFor="location"
                        className="text-gray-700 block font-semibold mb-2"
                    >
                        Location:
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={editedProduct.location}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <label
                        htmlFor="price"
                        className="text-gray-700 block font-semibold mb-2"
                    >
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="flex items-center">
                    <button
                        onClick={handleSaveChanges}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-4"
                    >
                        Save Changes
                    </button>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default IsEdit
