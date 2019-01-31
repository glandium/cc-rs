var N=null,E="",T="t",U="u",searchIndex={};

var r_Aa="formatter",r_Ba="VsVers",r_Ca="Build",r_Da="Error",r_aa="option",r_ba="build",r_ca="self",r_da="str",r_ea="result",r_fa="bool",r_ga="Configures the optimization level of the generated object…",r_ha="error",r_ia="Run the compiler, generating the file `output`",r_ja="Get the compiler that's in use for this configuration.",r_ka="tool",r_la="command",r_ma="osstring",r_na="to_owned",r_oa="clone_into",r_pa="try_from",r_qa="borrow",r_ra="type_id",r_sa="typeid",r_ta="borrow_mut",r_ua="try_into",r_va="from",r_wa="into",r_xa="cc::windows_registry",r_ya="vsvers",r_za="clone";
searchIndex["cc"]={"doc":"A library for build scripts to compile custom C code","i":[[3,r_Ca,"cc","A builder for compilation of a native static library.",N,N],[3,r_Da,E,"Represents an internal error that occurred, with an…",N,N],[3,"Tool",E,"Configuration used to represent an invocation of a C…",N,N],[0,"windows_registry",E,"A helper module to probe the Windows Registry when looking…",N,N],[4,r_Ba,r_xa,"A version of Visual Studio",N,N],[13,"Vs12",E,"Visual Studio 12 (2013)",0,N],[13,"Vs14",E,"Visual Studio 14 (2015)",0,N],[13,"Vs15",E,"Visual Studio 15 (2017)",0,N],[5,"find",E,"Attempts to find a tool within an MSVC installation using…",N,[[[r_da],[r_da]],[r_aa,[r_la]]]],[5,"find_tool",E,"Similar to the `find` function above, this function will…",N,[[[r_da],[r_da]],[r_aa,[r_ka]]]],[5,"find_vs_version",E,"Find the most recent installed version of Visual Studio",N,[[],[r_ea,[r_ya,"string"]]]],[11,"new","cc","Construct a new instance of a blank set of configuration.",1,[[],[r_ba]]],[11,"include",E,"Add a directory to the `-I` or include path for headers",1,[[[r_ca],["p"]],[r_ba]]],[11,"define",E,"Specify a `-D` variable with an optional value.",1,[[[r_ca],[r_da],["v"]],[r_ba]]],[11,"object",E,"Add an arbitrary object file to link in",1,[[[r_ca],["p"]],[r_ba]]],[11,"flag",E,"Add an arbitrary flag to the invocation of the compiler",1,[[[r_ca],[r_da]],[r_ba]]],[11,"is_flag_supported",E,"Run the compiler to test if it accepts the given flag.",1,[[[r_ca],[r_da]],[r_ea,[r_fa,r_ha]]]],[11,"flag_if_supported",E,"Add an arbitrary flag to the invocation of the compiler if…",1,[[[r_ca],[r_da]],[r_ba]]],[11,"shared_flag",E,"Set the `-shared` flag.",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"static_flag",E,"Set the `-static` flag.",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"file",E,"Add a file which will be compiled",1,[[[r_ca],["p"]],[r_ba]]],[11,"files",E,"Add files which will be compiled",1,[[[r_ca],["p"]],[r_ba]]],[11,"cpp",E,"Set C++ support.",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"cuda",E,"Set CUDA C++ support.",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"warnings_into_errors",E,"Set warnings into errors flag.",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"warnings",E,"Set warnings flags.",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"extra_warnings",E,"Set extra warnings flags.",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"cpp_link_stdlib",E,"Set the standard library to link against when compiling…",1,[[[r_ca],["v"]],[r_ba]]],[11,"cpp_set_stdlib",E,"Force the C++ compiler to use the specified standard…",1,[[[r_ca],["v"]],[r_ba]]],[11,"target",E,"Configures the target this configuration will be compiling…",1,[[[r_ca],[r_da]],[r_ba]]],[11,"host",E,"Configures the host assumed by this configuration.",1,[[[r_ca],[r_da]],[r_ba]]],[11,"opt_level",E,r_ga,1,[[[r_ca],["u32"]],[r_ba]]],[11,"opt_level_str",E,r_ga,1,[[[r_ca],[r_da]],[r_ba]]],[11,"debug",E,"Configures whether the compiler will emit debug…",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"out_dir",E,"Configures the output directory where all object files and…",1,[[[r_ca],["p"]],[r_ba]]],[11,"compiler",E,"Configures the compiler to be used to produce output.",1,[[[r_ca],["p"]],[r_ba]]],[11,"archiver",E,"Configures the tool used to assemble archives.",1,[[[r_ca],["p"]],[r_ba]]],[11,"cargo_metadata",E,"Define whether metadata should be emitted for cargo…",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"pic",E,"Configures whether the compiler will emit position…",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"use_plt",E,"Configures whether the Procedure Linkage Table is used for…",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"static_crt",E,"Configures whether the /MT flag or the /MD flag will be…",1,[[[r_ca],[r_fa]],[r_ba]]],[11,"try_compile",E,r_ia,1,[[[r_ca],[r_da]],[r_ea,[r_ha]]]],[11,"compile",E,r_ia,1,[[[r_ca],[r_da]]]],[11,"try_expand",E,"This will return a result instead of panicing; see…",1,[[[r_ca]],[r_ea,["vec",r_ha]]]],[11,"expand",E,"Run the compiler, returning the macro-expanded version of…",1,[[[r_ca]],["vec",["u8"]]]],[11,"get_compiler",E,r_ja,1,[[[r_ca]],[r_ka]]],[11,"try_get_compiler",E,r_ja,1,[[[r_ca]],[r_ea,[r_ka,r_ha]]]],[11,"to_command",E,"Converts this compiler into a `Command` that's ready to be…",2,[[[r_ca]],[r_la]]],[11,"path",E,"Returns the path for this compiler.",2,[[[r_ca]],["path"]]],[11,"args",E,"Returns the default set of arguments to the compiler…",2,N],[11,"env",E,"Returns the set of environment variables needed for this…",2,N],[11,"cc_env",E,"Returns the compiler command in format of CC environment…",2,[[[r_ca]],[r_ma]]],[11,"cflags_env",E,"Returns the compiler flags in format of CFLAGS environment…",2,[[[r_ca]],[r_ma]]],[11,"is_like_gnu",E,"Whether the tool is GNU Compiler Collection-like.",2,[[[r_ca]],[r_fa]]],[11,"is_like_clang",E,"Whether the tool is Clang-like.",2,[[[r_ca]],[r_fa]]],[11,"is_like_msvc",E,"Whether the tool is MSVC-like.",2,[[[r_ca]],[r_fa]]],[11,r_va,E,E,1,[[[T]],[T]]],[11,r_wa,E,E,1,[[[r_ca]],[U]]],[11,r_na,E,E,1,[[[r_ca]],[T]]],[11,r_oa,E,E,1,N],[11,r_pa,E,E,1,[[[U]],[r_ea]]],[11,r_qa,E,E,1,[[[r_ca]],[T]]],[11,r_ra,E,E,1,[[[r_ca]],[r_sa]]],[11,r_ta,E,E,1,[[[r_ca]],[T]]],[11,r_ua,E,E,1,[[[r_ca]],[r_ea]]],[11,r_va,E,E,3,[[[T]],[T]]],[11,r_wa,E,E,3,[[[r_ca]],[U]]],[11,r_na,E,E,3,[[[r_ca]],[T]]],[11,r_oa,E,E,3,N],[11,r_pa,E,E,3,[[[U]],[r_ea]]],[11,r_qa,E,E,3,[[[r_ca]],[T]]],[11,r_ra,E,E,3,[[[r_ca]],[r_sa]]],[11,r_ta,E,E,3,[[[r_ca]],[T]]],[11,r_ua,E,E,3,[[[r_ca]],[r_ea]]],[11,r_va,E,E,2,[[[T]],[T]]],[11,r_wa,E,E,2,[[[r_ca]],[U]]],[11,r_na,E,E,2,[[[r_ca]],[T]]],[11,r_oa,E,E,2,N],[11,r_pa,E,E,2,[[[U]],[r_ea]]],[11,r_qa,E,E,2,[[[r_ca]],[T]]],[11,r_ra,E,E,2,[[[r_ca]],[r_sa]]],[11,r_ta,E,E,2,[[[r_ca]],[T]]],[11,r_ua,E,E,2,[[[r_ca]],[r_ea]]],[11,r_va,r_xa,E,0,[[[T]],[T]]],[11,r_wa,E,E,0,[[[r_ca]],[U]]],[11,r_na,E,E,0,[[[r_ca]],[T]]],[11,r_oa,E,E,0,N],[11,r_pa,E,E,0,[[[U]],[r_ea]]],[11,r_qa,E,E,0,[[[r_ca]],[T]]],[11,r_ra,E,E,0,[[[r_ca]],[r_sa]]],[11,r_ta,E,E,0,[[[r_ca]],[T]]],[11,r_ua,E,E,0,[[[r_ca]],[r_ea]]],[11,"eq",E,E,0,[[[r_ca],[r_ya]],[r_fa]]],[11,"default","cc",E,1,[[],[r_ba]]],[11,r_za,r_xa,E,0,[[[r_ca]],[r_ya]]],[11,r_za,"cc",E,1,[[[r_ca]],[r_ba]]],[11,r_za,E,E,3,[[[r_ca]],[r_ha]]],[11,r_za,E,E,2,[[[r_ca]],[r_ka]]],[11,r_va,E,E,3,[[[r_ha]],[r_ha]]],[11,"fmt",r_xa,E,0,[[[r_ca],[r_Aa]],[r_ea]]],[11,"fmt","cc",E,1,[[[r_ca],[r_Aa]],[r_ea]]],[11,"fmt",E,E,3,[[[r_ca],[r_Aa]],[r_ea]]],[11,"fmt",E,E,2,[[[r_ca],[r_Aa]],[r_ea]]]],"p":[[4,r_Ba],[3,r_Ca],[3,"Tool"],[3,r_Da]]};
searchIndex["gcc_shim"]={"doc":E,"i":[],"p":[]};
initSearch(searchIndex);addSearchOptions(searchIndex);