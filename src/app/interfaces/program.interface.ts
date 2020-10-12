export interface IProgram {
    mission_id: string;
    mission_name: string;
    launch_success: boolean;
    land_success: boolean;
    launch_year: string;
    links?: ILink;
  }

  export interface ILink {
    mission_patch?: string;
    mission_patch_small?: string;
  }
