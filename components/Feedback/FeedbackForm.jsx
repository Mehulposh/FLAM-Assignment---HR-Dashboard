import React, { useState } from 'react'
import Button from '../Button/Button'
import useEmployeeStore from '@/store/EmployeeStore';

const FeedbackForm = () => {
    const isDarkMode = useEmployeeStore(state => state.isDarkMode);
    const [formData,setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.name && formData.email && formData.feedback){
            alert('Feedback Submited');
            return;
        }
        else{
            alert('Fill the Feedback Form');
        }

        setFormData({
            name: '',
            email: '',
            feedback: ''
        })
    } 


  return (
    <div className="max-w-md mx-auto p-6">
    <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
            <span className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-700" : "text-gray-200"}`}>
                Name:
            </span>
            <input 
                type="text"
                placeholder="Write your name"
                value={formData.name}
                onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                })}
                required
                className={`w-full px-3 py-2 rounded-md shadow-sm focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors
                            ${isDarkMode ? "border border-gray-500  placeholder-gray-500" : "border border-gray-300  placeholder-gray-400"}`}
            />
        </label>
        <label className="block">
            <span className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-700" : "text-gray-200"}`}>
                Email:
            </span>
            <input 
                type="email"
                placeholder="Write your email"
                value={formData.email}
                onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                })}
                required
                className={`w-full px-3 py-2 rounded-md shadow-sm focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors
                            ${isDarkMode ? "border border-gray-500  placeholder-gray-500" : "border border-gray-300  placeholder-gray-400"}`}            />
        </label>
        <label className="block">
            <span className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-700" : "text-gray-200"}`}>
                Feedback:
            </span>
            <textarea 
                type="text"
                placeholder="Write your feedback"
                value={formData.feedback}
                onChange={(e) => setFormData({
                    ...formData,
                    feedback: e.target.value
                })}
                required
                className={`w-full px-3 py-2 rounded-md shadow-sm focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors
                            ${isDarkMode ? "border border-gray-500  placeholder-gray-500" : "border border-gray-300  placeholder-gray-400"}`}            />
        </label>

        <Button type='submit'>Submit</Button>
    </form>
</div>
  )
}

export default FeedbackForm