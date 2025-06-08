import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="mx-auto flex h-16 max-w-4xl border-b items-center justify-between px-4 space-x-4 sm:space-x-0">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href={"./"} className="flex items-center space-x-2">
      <span className="text-xl font-bold">Faiq Thirafi</span>
    </Link>
  );
}

function Nav() {
  return (
    <div className="flex items-center space-x-4">
      <nav className="flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              item.active ? "text-primary" : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </div>
  );
}

const navItems = [
  {
    name: "About",
    href: "/about",
    active: false,
  },
  {
    name: "Contact",
    href: "/contact",
    active: false,
  },
];
