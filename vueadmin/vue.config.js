module.exports= {
    //基本路径
    publicPath:'/',
    chainWebpack: (config) => {
        // config.resolve.alias
        //     .set('@', resolve('src')) //3.0的写法 映射路径 @代表src 比如要写一个图片 <img src='@/assets/img/1.jpg'/>就会读取src下assets下img下的图片
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            });
    }
}