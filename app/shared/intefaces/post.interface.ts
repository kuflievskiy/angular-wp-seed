export  interface Post {
    ID : number;
    author : {
        ID:number,
        URL:string,
        avatar:string,
        description:string,
        first_name:string,
        last_name:string,
        meta:{
          links : {
              archives:string,
              self:string
          }
        },
        name:string,
        nickname:string,
        registered:string,
        slug:string,
        username:string
    },
    comment_status : string,
    date : string,
    content : string,
    date_gmt : string,
    date_tz : string,
    excerpt : any,
    featured_image : boolean|{
        ID:number,
        attachment_meta:{
            file:string,
            height:number,
            image_meta:{
                aperture:string,
                camera:string,
                caption:string,
                copyright:string,
                created_timestamp:string,
                credit:string,
                focal_length:string,
                iso:string,
                keywords:[number],
                orientation:string,
                shutter_speed:string,
                title:string
            },
            sizes:{
                large:{
                    file:string,
                    height:number,
                    'mime-type':string,
                    url:string,
                    width:number
                },
                medium:{
                    file:string,
                    height:number,
                    'mime-type':string,
                    url:string,
                    width:number
                },
                medium_large:{
                    file:string,
                    height:number,
                    'mime-type':string,
                    url:string,
                    width:number
                },
                'post-thumbnail':{
                    file:string,
                    height:number,
                    'mime-type':string,
                    url:string,
                    width:number
                },
                thumbnail: {
                    file:string,
                    height:number,
                    'mime-type':string,
                    url:string,
                    width:number
                }
        }
        },
        author:any,
        comment_status:string,
        content:string,
        date:string,
        date_gmt:string,
        date_tz:string,
        except:boolean|string,
        guid:string,
        is_image:boolean,
        link:string,
        menu_order:number,
        meta:{
            links:{
                author:string,
                collection:string,
                replies:string,
                self:string,
                up:string,
                'version-history':string
            }
        },
        modified:string,
        modified_gmt:string,
        parent:boolean|number,
        ping_status:string,
        slug:string,
        source:string,
        status:string,
        sticky:boolean,
        terms:[
            any
        ],
        title:string,
        type:string
    },
    format:string,
    guid : string,
    link : string,
    menu_order:number,
    meta: {
        // @todo
    },
    modified:string,
    modified_gmt:string,
    modified_tz:string,
    parent: boolean|number,
    ping_status:string,
    slug:string,
    status:string,
    sticky:boolean,
    terms:{
        category:[
            {
                ID:number,
                count:number,
                description:string,
                link:string,
                meta:{
                    links:{
                        collection:string,
                        self:string
                    }
                },
                name:string,
                parent:boolean|number,
                slug:string,
                taxonomy:string
            }
        ]
    },
    title:string,
    type:string
}