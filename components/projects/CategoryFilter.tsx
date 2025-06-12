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
    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-6 sm:mb-8">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg ${TYPOGRAPHY.body.primary} font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'cyber-button'
                : 'border border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
            }`}
          >
            <Icon size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
} 