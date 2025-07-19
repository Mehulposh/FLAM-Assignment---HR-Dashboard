import Button from '../Button/Button'
import React,{useState} from 'react'

const NewEmployee = ({closeModal}) => {
    const [formData,setFormData] = useState({
            name: '',
            email: '',
            age: '',
            department: ''
        });
    
        
        const handleSubmit = (e) => {
            e.preventDefault();
    
            if(formData.name && formData.email && formData.age && formData.department){
                alert('New Employee Added');
                closeModal()
                return;
            }
            else{
                alert('FComplete the New Employee Form');
            }
    
            setFormData({
                name: '',
                email: '',
                age: '',
                department: ''
            })
        } 
  return (
    <div className='w-[400px]' >
        <form onSubmit={handleSubmit} className='space-y-3 '>
            <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                    Name:
                </span>
                <input 
                type="text"
                placeholder="Employee Name"
                value={formData.name}
                onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
            </label>
            <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Age:
                </span>
                <input 
                type="number"
                placeholder="Employee Age"
                value={formData.age}
                onChange={(e) => setFormData({
                    ...formData,
                    age: e.target.value
                })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
            </label>
            <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                    Email:
                </span>
                <input 
                type="email"
                placeholder=" Employee Email"
                value={formData.email}
                onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                 />
            </label>
            <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                    Department:
                </span>
                <input 
                type="text"
                placeholder=" Employee Department"
                value={formData.department}
                onChange={(e) => setFormData({
                    ...formData,
                    department: e.target.value
                })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
            </label>
            <Button type='submit' className='w-full'>Add</Button>
        </form>
    </div>
  )
}

export default NewEmployee