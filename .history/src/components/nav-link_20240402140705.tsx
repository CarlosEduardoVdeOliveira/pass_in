interface NavLinkProps{
  children: string
}
export function NavLink({children}: NavLinkProps){
  return(
    <a href="">{children}</a>
  );
}