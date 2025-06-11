import className from "@/constants/class-name";
import { AlignJustify, Atom, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { useState } from "react";

type CategorySectionProps = {
  title?: string;
  items: string[];
};

const CategorySection: FC<CategorySectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "font-semibold text-black",
          "transition-colors duration-200",
          "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black",
          "after:transition-all after:duration-300",
          "hover:after:w-full",
          "cursor-pointer"
        )}
      >
        {title}
      </button>

      <div
        className={cn(
          "fixed top-24 left-1/2 -translate-x-1/2",
          "w-screen bg-white",
          "z-50",
          "transition-all duration-300 ease-in-out",
          "transform origin-top",
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-2">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col items-center p-2 gap-8"
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "space-y-4",
                      "transform transition-all duration-300",
                      "hover:translate-x-1"
                    )}
                  >
                    <h3 className="font-semibold text-sm text-gray-900">
                      {item}
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "New Arrivals",
                        "Best Sellers",
                        "Featured",
                        "Special Offers",
                      ].map((menuItem, idx) => (
                        <li
                          key={idx}
                          className={cn(
                            "text-gray-600 hover:text-black cursor-pointer",
                            "transition-all duration-200",
                            "relative pl-4",
                            "before:absolute before:left-0 before:top-1/2 before:w-0 before:h-0.5",
                            "before:bg-black before:transition-all before:duration-200",
                            "hover:before:w-2 hover:pl-6"
                          )}
                        >
                          {menuItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MainNavigation = () => {
  return (
    <div className={`grid grid-cols-3 items-center h-14 ${className.pxApp}`}>
      <div>
        {/* logo */}
        <Atom color="#5db8fe" size={30} />
      </div>
      <nav className="flex items-center justify-center">
        <ul className="flex items-center gap-4 text-gray-600">
          <li>
            <CategorySection
              title="New and Featured"
              items={["New and Featured"]}
            />
          </li>
          <li>
            <CategorySection title="Men" items={["New and Featured"]} />
          </li>
          <li>
            <CategorySection title="Women" items={["New and Featured"]} />
          </li>
          <li>
            <CategorySection title="Kid" items={["New and Featured"]} />
          </li>
          <li>
            <CategorySection title="Sale" items={["New and Featured"]} />
          </li>
        </ul>
      </nav>
      <nav className="flex justify-end">
        <ul className="flex items-center gap-4 text-gray-600">
          <li>
            <Search />
          </li>
          <li>
            <User />
          </li>
          <li>
            <ShoppingBag />
          </li>
          <li>
            <AlignJustify />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
