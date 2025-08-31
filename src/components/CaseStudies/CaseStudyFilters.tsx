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
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`rounded-full px-6 py-3 font-heading text-sm font-medium transition-all ${
            selectedCategory === category.id
              ? 'bg-primary text-white shadow-md'
              : 'bg-white text-dark hover:bg-primary/10 hover:text-primary dark:bg-[#2C3443] dark:text-white dark:hover:bg-primary/20'
          }`}
        >
          {category.name}
          <span className="ml-2 text-xs opacity-75">({category.count})</span>
        </button>
      ))}
    </div>
  );
}