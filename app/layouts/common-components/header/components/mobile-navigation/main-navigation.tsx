import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ChevronRight } from "lucide-react";
const CategorySection = () => {
  return (
    <nav className="px-8">
      <ul className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <li
              key={index}
              className="text-lg font-bold  flex items-center justify-between"
            >
              <h3>Category</h3>
              <ChevronRight color="#474747" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const MainNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>
            <div className="my-2" />
          </SheetTitle>
          <SheetDescription>
            <div className="my-4" />
          </SheetDescription>
        </SheetHeader>
        <CategorySection />
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default MainNavigation;
