export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          angle_of_view: string | null
          article: string | null
          color: string | null
          conjugation_with_an_access_intercom: boolean | null
          consumption: string | null
          corner: boolean | null
          created_at: string
          hd_format_switcher: boolean | null
          holding_force: string | null
          id: string
          ik_illumination: boolean | null
          image: string | null
          loading_your_melody_to_call: boolean | null
          management_buttons: string | null
          manufacturer: string | null
          movement_detector_record: boolean | null
          name: string | null
          permission: string | null
          power: string | null
          record_photo: boolean | null
          reed_switch: boolean | null
          screen_sizes: string | null
          street: boolean | null
          support_full_hd: boolean | null
          support_sd_card: boolean | null
          the_function_of_the_square: boolean | null
          the_number_of_calling_panels_in_the_max_system: string | null
          the_number_of_monitors_in_the_max_system: string | null
          the_number_of_video_cameras_in_the_max_system: string | null
          the_umber_of_subscribers: string | null
          touch_screen: boolean | null
          type_equipment: string | null
          type_lock: string | null
          type_of_intercom: string | null
          video_signal_format: string | null
          wi_fi: boolean | null
          writing_video: boolean | null
        }
        Insert: {
          angle_of_view?: string | null
          article?: string | null
          color?: string | null
          conjugation_with_an_access_intercom?: boolean | null
          consumption?: string | null
          corner?: boolean | null
          created_at?: string
          hd_format_switcher?: boolean | null
          holding_force?: string | null
          id?: string
          ik_illumination?: boolean | null
          image?: string | null
          loading_your_melody_to_call?: boolean | null
          management_buttons?: string | null
          manufacturer?: string | null
          movement_detector_record?: boolean | null
          name?: string | null
          permission?: string | null
          power?: string | null
          record_photo?: boolean | null
          reed_switch?: boolean | null
          screen_sizes?: string | null
          street?: boolean | null
          support_full_hd?: boolean | null
          support_sd_card?: boolean | null
          the_function_of_the_square?: boolean | null
          the_number_of_calling_panels_in_the_max_system?: string | null
          the_number_of_monitors_in_the_max_system?: string | null
          the_number_of_video_cameras_in_the_max_system?: string | null
          the_umber_of_subscribers?: string | null
          touch_screen?: boolean | null
          type_equipment?: string | null
          type_lock?: string | null
          type_of_intercom?: string | null
          video_signal_format?: string | null
          wi_fi?: boolean | null
          writing_video?: boolean | null
        }
        Update: {
          angle_of_view?: string | null
          article?: string | null
          color?: string | null
          conjugation_with_an_access_intercom?: boolean | null
          consumption?: string | null
          corner?: boolean | null
          created_at?: string
          hd_format_switcher?: boolean | null
          holding_force?: string | null
          id?: string
          ik_illumination?: boolean | null
          image?: string | null
          loading_your_melody_to_call?: boolean | null
          management_buttons?: string | null
          manufacturer?: string | null
          movement_detector_record?: boolean | null
          name?: string | null
          permission?: string | null
          power?: string | null
          record_photo?: boolean | null
          reed_switch?: boolean | null
          screen_sizes?: string | null
          street?: boolean | null
          support_full_hd?: boolean | null
          support_sd_card?: boolean | null
          the_function_of_the_square?: boolean | null
          the_number_of_calling_panels_in_the_max_system?: string | null
          the_number_of_monitors_in_the_max_system?: string | null
          the_number_of_video_cameras_in_the_max_system?: string | null
          the_umber_of_subscribers?: string | null
          touch_screen?: boolean | null
          type_equipment?: string | null
          type_lock?: string | null
          type_of_intercom?: string | null
          video_signal_format?: string | null
          wi_fi?: boolean | null
          writing_video?: boolean | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          company: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          middle_name: string | null
          phone_number: string | null
          role: string | null
        }
        Insert: {
          company?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          middle_name?: string | null
          phone_number?: string | null
          role?: string | null
        }
        Update: {
          company?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          middle_name?: string | null
          phone_number?: string | null
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
