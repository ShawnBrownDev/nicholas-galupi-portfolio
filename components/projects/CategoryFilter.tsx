import { Category } from '@/lib/projects';
import { TYPOGRAPHY } from '@/lib/constants';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg ${TYPOGRAPHY.body.primary} font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'cyber-button'
                : 'border border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
            }`}
          >
            <Icon size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
} 