export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export namespace VmInfo {
  export type Variables = {
    ref: string;
  };

  export type Query = {
    __typename?: "Query";

    vm: Maybe<Vm>;
  };

  export type Vm = VmInfoFragment.Fragment;
}

export namespace AbstractVmFragment {
  export type Fragment = {
    __typename?: "GAbstractVM";

    memoryStaticMin: number;

    memoryStaticMax: number;

    memoryDynamicMin: number;

    memoryDynamicMax: number;

    VCPUsAtStartup: number;

    VCPUsMax: number;
  };
}

export namespace AclXenObjectFragment {
  export type Fragment = {
    __typename?: "GAclXenObject";

    ref: string;

    nameLabel: string;

    nameDescription: string;
  };
}

export namespace VmInfoFragment {
  export type Fragment =
    | AclXenObjectFragment.Fragment
    | AbstractVmFragment.Fragment;
}
