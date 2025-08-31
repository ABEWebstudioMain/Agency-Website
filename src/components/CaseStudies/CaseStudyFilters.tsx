"use client";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CaseStudyFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CaseStudyFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: CaseStudyFiltersProps) {
  return (
    <div className="mb-16 flex flex-wrap justify-center gap-3 lg:mb-20 lg:gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`min-h-[44px] rounded-full px-6 py-3 font-heading text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            selectedCategory === category.id
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-white text-dark hover:bg-primary/10 hover:text-primary hover:scale-105 dark:bg-[#2C3443] dark:text-white dark:hover:bg-primary/20'
          }`}
        >
          {category.name}
          <span className="ml-2 text-xs font-medium opacity-75">({category.count})</span>
        </button>
      ))}
    </div>
  );
}