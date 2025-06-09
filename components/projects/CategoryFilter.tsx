import { Category } from '@/lib/projects';

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
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-rajdhani font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'cyber-button'
                : 'border border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
            }`}
          >
            <Icon size={18} />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
} 