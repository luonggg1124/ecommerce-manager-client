import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import className from "@/constants/class-name";
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
import { AlignJustify, Atom, Search, ShoppingBag, User } from "lucide-react";
import Banner from "../common-components/banner";

const MobileHeader = () => {
  return (
    <header className="lg:hidden">
      <div
        className={`flex items-center justify-between h-14 ${className.pxApp}`}
      >
        <div>
          <Atom color="#5db8fe" size={30} />
        </div>
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
            <Sheet>
              <SheetTrigger asChild>
                <AlignJustify />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">Name</Label>
                    <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Username</Label>
                    <Input id="sheet-demo-username" defaultValue="@peduarte" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </div>
      <Banner />
    </header>
  );
};
export default MobileHeader;
