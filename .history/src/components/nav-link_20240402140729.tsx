interface NavLinkProps{
  children: string
}
export function NavLink({children}: NavLinkProps){
  return(
    <a className="font-medium text-sm text-zinc-300" href="">{children}</a>
  );
}