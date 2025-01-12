import React from 'react';
import { Star, ThumbsUp, MessageSquare, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReviewsStats() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rating Distribution */}
        <div>
          <h3 className="text-lg font-medium mb-4">Distribution des notes</h3>
          {[5, 4, 3, 2, 1].map((rating) => (
            <motion.div 
              key={rating} 
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: rating * 0.1 }}
            >
              <div className="flex items-center w-20">
                <span className="mr-2">{rating}</span>
                <Star className="w-4 h-4 text-primary fill-primary" />
              </div>
              <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ 
                    width: `${rating === 5 ? '75' : rating === 4 ? '15' : '5'}%` 
                  }}
                  transition={{ duration: 1, delay: rating * 0.1 }}
                />
              </div>
              <span className="ml-4 w-12 text-sm text-gray-500">
                {rating === 5 ? '75%' : rating === 4 ? '15%' : '5%'}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: ThumbsUp,
              value: '98%',
              label: 'Satisfaction client'
            },
            {
              icon: MessageSquare,
              value: '500+',
              label: 'Avis vérifiés'
            },
            {
              icon: Star,
              value: '4.9',
              label: 'Note moyenne'
            },
            {
              icon: Award,
              value: '5',
              label: 'Années d\'expérience'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}