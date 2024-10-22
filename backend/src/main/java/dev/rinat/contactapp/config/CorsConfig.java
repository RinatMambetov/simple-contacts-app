package dev.rinat.contactapp.config;

import dev.rinat.contactapp.env.AppSettings;
import dev.rinat.contactapp.models.Contact;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class CorsConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Contact.class);
        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(AppSettings.getHost())
                .allowedMethods("GET", "POST", "DELETE")
                .allowCredentials(true);
    }
}
