import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Atom, Search } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

type SearchSectionProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchSection: React.FC<SearchSectionProps> = ({
  open = true,
  setOpen,
}) => {
  if (!open) return null;
  return (
    <div
      className={cn("fixed top-0 left-0 right-0 min-h-[240px] bg-white z-[60]")}
    >
      <div
        className={cn(
          "flex items-center justify-between py-2 px-8",
          "transition-all duration-400 ease-out",
          "animate-in fade-in slide-in-from-bottom-20 slide-in-from-right-20"
        )}
      >
        <div>
          <Atom color="#5db8fe" size={30} />
        </div>
        <div className="w-[60%] relative">
          <div className="absolute flex items-center justify-center size-9 bg-slate-200 rounded-full">
            <Search />
          </div>
          <Input className="rounded-3xl pl-12 focus-visible:ring-0 border-0 bg-gray-200 hover:bg-gray-100" />
        </div>
        <button className="cursor-pointer" onClick={() => setOpen?.(false)}>
          Cancel
        </button>
      </div>
      <div
        className={cn(
          "flex items-center justify-center mt-8",
          "transition-all duration-700 ease-in-out",
          "animate-in fade-in-50 slide-in-from-right-20"
        )}
      >
        <div className="w-[90%] lg:w-[60%] ">
          <span className="text-gray-400">Popular Search Terms</span>
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <Badge
                  variant="secondary"
                  className="px-4 py-2 rounded-3xl cursor-pointer"
                  key={index}
                >
                  Badge Badge Badge
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchSection;
