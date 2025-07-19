import React, { useState } from 'react'
import Button from '../Button/Button'

const FeedbackForm = () => {
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
            <span className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
        </label>
        <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
        </label>
        <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
        </label>

        <Button type='submit'>Submit</Button>
    </form>
</div>
  )
}

export default FeedbackForm