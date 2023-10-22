import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const contents = [
    {
      name: "Redeem",
      path: "/redeem",
    },
    {
      name: "Create",
      path: "/create",
    },
    {
      name: "My NFT",
      path: "/my-nft",
    },
  ];

  return (
    <div className="bg-background border-b">
      <div className="flex justify-between p-4 items-center">
        <h1 className="tracking-wider font-medium">POLY ENVELOPES</h1>
        <div className="">
          <div className="hidden md:inline-flex gap-4 items-center">
            {contents.map((content, index) => {
              return <p key={index}>{content.name}</p>;
            })}
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Contents</SheetTitle>
            <SheetDescription>
              {contents.map((content, index) => {
                return <p key={index}>{content.name}</p>;
              })}
              <ConnectButton chainStatus={"full"} />
            </SheetDescription>
          </SheetContent>
        </Sheet>
        <div className="hidden md:block">
          <ConnectButton chainStatus={"full"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
